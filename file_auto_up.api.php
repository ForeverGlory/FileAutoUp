<?php

/**
 * Implements hook_form().
 */
function file_auto_up_example_form($form, &$form_state) {
  $form['file'] = array(
    '#title' => t('Upload file'),
    '#type' => 'managed_file',
    '#description' => t('Select files automatically after upload.'),
    '#upload_location' => 'public://example_files/',
    //setting file auto upload
    '#file_auto_up' => TRUE,
  );
  $form['image'] = array(
    '#title' => t('Upload image'),
    '#type' => 'managed_file',
    '#description' => t('Select files automatically after upload.'),
    '#upload_location' => 'public://example_files/',
    '#file_extensions' => 'png gif jpg jpeg',
    //setting file auto upload
    '#file_auto_up' => TRUE,
  );
  return $form;
}