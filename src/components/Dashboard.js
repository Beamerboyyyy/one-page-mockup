import React from "react";

const Dashboard = () => {
  //For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.
  var siteIdentifier = "site/site1";

  //Your Bold BI application environment. (If Cloud, you should use `cloud`, if Enterprise, you should use `onpremise`)
  var environment = "onpremise";

  //Item id of the dashboard in the Bold BI server`
  var dashboardId = "759165c6-d969-4922-97f1-12c10e256615";

  //Bold BI Server URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)
  var rootUrl = "http://localhost:64503/bi/";

  //Url of the GetDetails(API) in this application
  var authorizationUrl = "http://localhost:8080/embeddetail/get";
  function embedSample() {
    var boldbiEmbedInstance = BoldBI.create({
      serverUrl: rootUrl + siteIdentifier,
      dashboardId: dashboardId,
      embedContainerId: "dashboard-container", // This should be the container id where you want to embed the dashboard
      embedType: BoldBI.EmbedType.Component,
      environment: environment,
      mode: BoldBI.Mode.View,
      height: "800px",
      width: "1200px",
      authorizationServer: {
        url: "http://localhost:8080/embeddetail/get",
      },
      expirationTime: "100000",
    });
    boldbiEmbedInstance.loadDashboard();
  }
  return (
    <div onload="embedSample();">
      <div id="dashboard-container"></div>
    </div>
  );
};

export default Dashboard;
