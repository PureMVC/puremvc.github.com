<?php
/**
 * PureMVC Port to PHP originally translated by Asbjørn Sloth Tønnesen
 *
 * @author Omar Gonzalez :: omar@almerblank.com
 * @author Hasan Otuome :: hasan@almerblank.com 
 * 
 * Created on Sep 24, 2008
 * PureMVC - Copyright(c) 2006-2008 Futurescale, Inc., Some rights reserved.
 * Your reuse is governed by the Creative Commons Attribution 3.0 Unported License
 */

require_once 'org/puremvc/php/interfaces/IProxy.php';
 
/**
 * The interface definition for a PureMVC Model.
 * 
 * <P>
 * In PureMVC, <code>IModel</code> implementors provide
 * access to <code>IProxy</code> objects by named lookup. </P>
 * 
 * <P>
 * An <code>IModel</code> assumes these responsibilities:</P>
 * 
 * <UL>
 * <LI>Maintain a cache of <code>IProxy</code> instances</LI>
 * <LI>Provide methods for registering, retrieving, and removing <code>IProxy</code> instances</LI>
 * </UL>
 */

interface IModel 
{
  /**
   * Register an <code>IProxy</code> instance with the <code>Model</code>.
   * 
   * @param proxyName the name to associate with this <code>IProxy</code> instance.
   * @param proxy an object reference to be held by the <code>Model</code>.
   */
  public function registerProxy( IProxy $proxy );

  /**
   * Retrieve an <code>IProxy</code> instance from the Model.
   * 
   * @param proxyName
   * @return the <code>IProxy</code> instance previously registered with the given <code>proxyName</code>.
   */
  public function retrieveProxy( $proxyName );

  /**
   * Remove an <code>IProxy</code> instance from the Model.
   * 
   * @param proxyName name of the <code>IProxy</code> instance to be removed.
   */
  public function removeProxy( $proxyName );
  
  /**
   * Check to see if a Proxy is registered with the Model.
   * 
   * @param proxyName name of the <code>IProxy</code> instance to check for.
   */
  public function hasProxy( $proxyName );
  
}
?>
