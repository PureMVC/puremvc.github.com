#
# PureMVC Flex/Rails Demo – Index Cards 
# Copyright (c) 2008 Jim Robson <jim.robson@puremvc.org>
# Your reuse is governed by the Creative Commons Attribution 3.0 License
#
class UsersController < ApplicationController

  def create
    @user = User.new(params[:user])
    @user.save
    render :xml => @user.to_xml
  end
  
  def list
    @users = User.find :all
    render :xml => @users.to_xml
  end
  
  def update
    @user = User.find(params[:id])
    @user.update_attributes(params[:user])
    render :xml => @user.to_xml
  end
  
  def delete
    @user = User.find(params[:id])
    @user.destroy
    render :xml => @user.to_xml
  end

end
