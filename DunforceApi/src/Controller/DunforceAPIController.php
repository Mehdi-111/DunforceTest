<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
     * @Route("/api", name="api_")
     */
class DunforceAPIController extends AbstractController
{
    /**
     * @Route("/dunforce/entreprises", name="liste",methods={"GET"})
     */
    public function index()
    {

        $yaml = Yaml::parse(file_get_contents('../content/organizations.yaml'));
        
         return new JsonResponse($yaml);

       
    
    
    
    
    }
     /**
     * @Route("/dunforce/entreprises/update", name="update",methods={"PUT","OPTIONS"})
     */
    public function updateFile(Request $request) {
       
        $data =  json_decode($request->getContent(), true);
        $yaml = Yaml::parse(file_get_contents('../content/organizations.yaml'));
        $yaml["organizations"][$data["index"]]["name"]=$data["name"];
        $yaml["organizations"][$data["index"]]["description"]=$data["description"];
        $yaml["organizations"][$data["index"]]["users"]=$data["users"];

        $new_yaml = Yaml::dump($yaml, 5);

file_put_contents('../content/organizations.yaml', $new_yaml);


    
        return new JsonResponse($yaml);

    }
     /**
     * @Route("/dunforce/entreprises/add", name="add",methods={"POST","OPTIONS"})
     */
    public function addOrg(Request $request) {
       
   

    $data =  json_decode($request->getContent(), true);
    $yaml = Yaml::parse(file_get_contents('../content/organizations.yaml'));
    array_push($yaml["organizations"] , $data);
    $indexedYaml = array_values($yaml["organizations"]);
    $yaml["organizations"] = $indexedYaml;
    $new_yaml = Yaml::dump($yaml,5);

    file_put_contents('../content/organizations.yaml', $new_yaml);
    return new JsonResponse($new_yaml);

    }
      /**
     * @Route("/dunforce/entreprises/delete", name="delete",methods={"DELETE"})
     */
    public function deleteOrg(Request $request) {
       
        $data =  json_decode($request->getContent(), true);
        $yaml = Yaml::parse(file_get_contents('../content/organizations.yaml'));
        unset(($yaml["organizations"])[$data["index"]]);

        $indexedYaml = array_values($yaml["organizations"]);
        $yaml["organizations"] = $indexedYaml;

        $new_yaml = Yaml::dump($yaml,5);

        file_put_contents('../content/organizations.yaml', $new_yaml);


    
        return new JsonResponse($new_yaml);

    }

   
}
