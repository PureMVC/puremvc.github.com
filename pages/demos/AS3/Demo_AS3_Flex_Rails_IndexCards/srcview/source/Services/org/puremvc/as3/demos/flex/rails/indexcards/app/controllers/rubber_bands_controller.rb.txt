#
# PureMVC Flex/Rails Demo – Index Cards 
# Copyright (c) 2008 Jim Robson <jim.robson@puremvc.org>
# Your reuse is governed by the Creative Commons Attribution 3.0 License
#

class RubberBandsController < ApplicationController

  def create
    @rubber_band = RubberBand.new(params[:rubber_band])
    @rubber_band.save
    render :xml => @rubber_band.to_xml
  end
  
  def list
    @rubber_bands = RubberBand.find :all
    render :xml => @rubber_bands.to_xml
  end
  
  def update
    @rubber_band = RubberBand.find(params[:id])
    @rubber_band.update_attributes(params[:rubber_band])
    render :xml => @rubber_band.to_xml
  end
  
  def delete
    @rubber_band = RubberBand.find(params[:id])
    @rubber_band.destroy
    render :xml => @rubber_band.to_xml
  end

end
