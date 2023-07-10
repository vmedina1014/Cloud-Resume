import json
import os
import boto3
import logging
logging.getLogger().setLevel(logging.INFO)

def lambda_handler(event, context):
    logging.info(os.environ['AWS_LAMBDA_LOG_GROUP_NAME'])
    logging.info(os.environ['AWS_LAMBDA_LOG_STREAM_NAME'])
    logging.info("Event:")
    logging.info(event)
    logging.info("\nContext:")
    logging.info(context)
    dynamodb = boto3.resource('dynamodb')
  
    table = dynamodb.Table('Visitors')
    http_method = event["requestContext"]["http"]["method"]

    if  http_method== "GET":
        response = {"visitor_count":table.get_item(Key={"Visitor":"Visitor_Count"})["Item"]['num_of_visitors']}

        return response
    
    elif http_method == "POST":
        
        
      
        table.update_item(Key={"Visitor":"Visitor_Count"},
        UpdateExpression = 'SET num_of_visitors = num_of_visitors + :increment',
     	ExpressionAttributeValues={":increment": 1}
		             )
         
        response = {"visitor_count":table.get_item(Key={"Visitor":"Visitor_Count"})["Item"]['num_of_visitors']}
        return response
        

