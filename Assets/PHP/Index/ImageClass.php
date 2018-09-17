<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 08/06/2018
 * Time: 09:24
 */

class ImageClass
{
    private $m_ID;
    private $m_Titre_FR;
    private $m_Titre_EN;
    private $m_Banniere;
    private $m_largeur;
    public function __construct($ID,$titreFR, $TitreEN, $Boolean,$large){
        $this->m_ID=$ID;
        $this->m_Titre_FR=$titreFR;
        $this->m_Titre_EN=$TitreEN;
        $this->m_Banniere=$Boolean;
        $this->m_largeur=$large;
    }

    /**
     * @return mixed
     */
    public function getMID()
    {
        return $this->m_ID;
    }

    /**
     * @return mixed
     */
    public function getMTitreFR()
    {
        return $this->m_Titre_FR;
    }

    /**
     * @return mixed
     */
    public function getMTitreEN()
    {
        return $this->m_Titre_EN;
    }

    /**
     * @return mixed
     */
    public function getMBanniere()
    {
        return $this->m_Banniere;
    }
    /**
     * @return mixed
     */
    public function getMLargeur()
    {
        return $this->m_largeur;
    }
}