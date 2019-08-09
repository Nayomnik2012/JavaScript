<?php
$time = $_POST['date'];
$result = array (
    "1" => data('1', strtotime($time)),
    "D" => data('D', strtotime($time)),
    "d" => data('d', strtotime($time)),
    "j" => data('j', strtotime($time)),
    "m" => data('m', strtotime($time)),
    "F" => data('F', strtotime($time)),
    "M" => data('M', strtotime($time)),
    "n" => data('n', strtotime($time)),
    "t" => data('t', strtotime($time)),
    "Y" => data('Y', strtotime($time)),
    "y" => data('y', strtotime($time)),
);

echo json_encode($result);