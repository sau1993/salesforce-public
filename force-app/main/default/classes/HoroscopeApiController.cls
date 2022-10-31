public class HoroscopeApiController{
  @AuraEnabled
  public static ResponseBuilder.responseWrapper getHoroscopeApiResults(String requestBody) 
    {  
         ResponseBuilder.responseWrapper resObj = new ResponseBuilder.responseWrapper();
     try{
            resObj = IntegrationHandler.processAPICallout(requestBody);
        }
        catch (Exception e) {
          System.debug('An exception occurred: ' + e.getMessage());
        }
        return resObj;
    }
}