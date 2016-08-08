#
# PureMVC Flex/Rails Demo – Index Cards 
# Copyright (c) 2008 Jim Robson <jim.robson@puremvc.org>
# Your reuse is governed by the Creative Commons Attribution 3.0 License
#

class CardsController < ApplicationController
  
  def create
    @card = Card.new(params[:card])
    @card.save
    render :xml => @card.to_xml
  end
  
  def list
    @cards = Card.find :all
    render :xml => @cards.to_xml
  end
  
  def update
    @card = Card.find(params[:id])
    @card.update_attributes(params[:card])
    render :xml => @card.to_xml
  end
  
  def delete
    @card = Card.find(params[:id])
    @card.destroy
    render :xml => @card.to_xml
  end
  
end
