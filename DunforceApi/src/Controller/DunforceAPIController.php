<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\HttpFoundation\JsonResponse;
/**
     * @Route("/api", name="api_")
     */
class DunforceAPIController extends AbstractController
{
    /**
     * @Route("/dunforce/entreprises", name="liste",methods={"GET","POST","DELETE","PUT"})
     */
    public function index()
    {

        $yaml = Yaml::parse(file_get_contents('../content/organizations.yaml'));
        // $yamlString = Yaml::dump($yaml);
        // $parsed = yaml_parse($yaml);

        // dd($yaml);
        // $data = file_get_contents('../content/test.json');
        
       
        // $response->headers->set('content-type','application/json');
         return new JsonResponse($yaml);

       
    
    
    
    
    }
}
