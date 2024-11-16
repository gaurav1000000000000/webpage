<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $contact = trim($_POST['contact']);
    $message = trim($_POST['message']);

    $errors = [];

    if (empty($name)) $errors['name'] = "Name is required.";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = "Invalid email format.";
    if (empty($contact)) $errors['contact'] = "Contact number is required.";
    if (empty($message)) $errors['message'] = "Message is required.";

    if (!empty($errors)) {
        echo json_encode(['status' => 'error', 'errors' => $errors]);
    } else {
        // Process the data here, like sending an email or saving to a database
        echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully!']);
    }
}
?>
