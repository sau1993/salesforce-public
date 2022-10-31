Global class IntegrationHandler{
  public static ResponseBuilder.responseWrapper processAPICallout(String requestBody){ 
        RequestBuilder.requestWrapper reqbody = (RequestBuilder.requestWrapper)JSON.deserialize(requestBody,RequestBuilder.requestWrapper.class);
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:jh_aztro'+'?sign='+reqbody.sign+ '&day='+reqbody.day);
        req.setMethod('POST');
        Http http = new Http();
        HTTPResponse res = http.send(req);
        String responseBody=res.getBody();
        System.debug(res.getBody());
        ResponseBuilder.responseWrapper resObject = (ResponseBuilder.responseWrapper)JSON.deserialize(responseBody,ResponseBuilder.responseWrapper.class);
        return resObject;
        }
}