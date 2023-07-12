import boto3
import logging

def lambda_handler(event,context):
    dynamodb = boto3.client('dynamodb')
    dynamodb.put_item(TableName='Cloud-Resume', Item={'id':{'N':"0"},'Visitor_Count':{'N':"0"}})
    
    return dynamodb.get_item(TableName='Cloud-Resume', Key={'id':{'N':"0"}})

