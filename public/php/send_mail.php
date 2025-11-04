<?php
mb_internal_encoding('UTF-8');

// --- Настройки ---
$to = 'alimdzhatdoev@mail.ru'; // <- получатель(и), можно через запятую
$projectDomain = 'karsavia.app'; // домен проекта (для Message-ID и From)
$fromEmail = 'no-reply@karsavia.app';
$fromName  = 'KarsAvia • Сайт';

// --- Хелперы ---
function getPost($key) {
  return isset($_POST[$key]) ? trim((string)$_POST[$key]) : '';
}
function sanitizeLine($s) {
  return str_replace(["\r", "\n"], ' ', $s);
}

// Разрешаем только POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo 'Invalid request method';
  exit;
}

// Honeypot (скрытое поле — должно быть пустым)
if (!empty($_POST['website'])) {
  http_response_code(200);
  echo 'Success'; // молча игнорируем бота как будто всё ок
  exit;
}

// Получаем поля из формы
$companyName        = sanitizeLine(getPost('companyName'));       // Наименование компании (юрлицо)
$innKpp             = sanitizeLine(getPost('innKpp'));            // ИНН/КПП
$region             = sanitizeLine(getPost('region'));            // Интересующий регион
$services           = sanitizeLine(getPost('services'));          // Список услуг одной строкой (через запятую)
$departmentName     = sanitizeLine(getPost('departmentName'));    // Наименование отдела
$specialistContacts = sanitizeLine(getPost('specialistContacts')); // Контакты специалиста (тел/email)
$sourcePage         = sanitizeLine(getPost('source') ?: ($_SERVER['HTTP_REFERER'] ?? ''));

// Базовая валидация (минимум)
if ($companyName === '' || $innKpp === '' || $region === '' || $services === '' || $departmentName === '' || $specialistContacts === '') {
  http_response_code(400);
  echo 'Заполните все обязательные поля';
  exit;
}

// Тема/тело письма
$subject    = 'Заявка на демо-доступ KarsAvia';
$subjectEnc = mb_encode_mimeheader($subject, 'UTF-8', 'B', "\r\n");

$bodyText =
  "Новая заявка на демо-доступ KarsAvia\n\n" .
  "Компания (юрлицо): {$companyName}\n" .
  "ИНН/КПП: {$innKpp}\n" .
  "Регион: {$region}\n" .
  "Услуги: {$services}\n" .
  "Отдел (формирует запрос): {$departmentName}\n" .
  "Контакты специалиста: {$specialistContacts}\n" .
  ($sourcePage ? "Источник: {$sourcePage}\n" : "") .
  "—\nОтправлено с формы сайта KarsAvia";

// Заголовки
$fromNameEnc = mb_encode_mimeheader($fromName, 'UTF-8', 'B', "\r\n");
$headers = [];
$headers[] = "From: {$fromNameEnc} <{$fromEmail}>";
$headers[] = "Reply-To: {$fromEmail}";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "Content-Transfer-Encoding: 8bit";
$headers[] = "Date: " . date('r');
$headers[] = "Message-ID: <" . uniqid('', true) . "@{$projectDomain}>";
$headersStr = implode("\r\n", $headers);

// Отправка (envelope-from обязателен)
$ok = @mail($to, $subjectEnc, $bodyText, $headersStr, "-f {$fromEmail}");

echo $ok ? 'Success' : (http_response_code(500) && 'Error');
