#
# PureMVC Flex/Rails Demo – Index Cards 
# Copyright (c) 2008 Jim Robson <jim.robson@puremvc.org>
# Your reuse is governed by the Creative Commons Attribution 3.0 License
#
class SubjectsController < ApplicationController

  def create
    @subject = Subject.new(params[:subject])
    @subject.save
    render :xml => @subject.to_xml
  end

  def list
    @subjects = Subject.find :all
    render :xml => @subjects.to_xml
  end

  def update
    @subject = Subject.find(params[:id])
    @subject.update_attributes(params[:subject])
    render :xml => @subject.to_xml
  end

  def delete
    @subject = Subject.find(params[:id])
    @subject.destroy
    render :xml => @subject.to_xml
  end

end
