<?php

namespace Drupal\hello_world\Controller;
use Drupal\Core\Controller\ControllerBase;

/**
 * Controller for the salutation message
 */

class HelloWorldController extends ControllerBase {
  public function helloWorld() {
    return [
      '#type' => 'markup',
      '#markup' => ('Hello, World!')
    ];
  }
}