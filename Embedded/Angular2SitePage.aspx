<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>

<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>


<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">

    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.0/angular2-polyfills.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.1/es6-shim.min.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.0/Rx.umd.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.0/angular2-all.umd.min.js"></script>

</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
    Angular 2 Site Page
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">

    <hello-angular2></hello-angular2>

    <script type="text/javascript">

        //namespace
        var myApp = window.myApp || {};

        //service
        myApp.AppService =
          ng.core.Class({
              constructor: function () { },
              getCurrentUser: function () {
                  return Rx.Observable.create(function (observer) {
                      this.ctx = new SP.ClientContext.get_current();
                      this.user = this.ctx.get_web().get_currentUser();
                      this.ctx.load(this.user);
                      this.ctx.executeQueryAsync(
                          Function.createDelegate(this, function () {
                              observer.next("Welcome, " + this.user.get_title() + "!");
                          }),
                          Function.createDelegate(this, function (sender, args) {
                              observer.error(args.get_message());
                          }));
                  });
              }
          });

        //component
        myApp.AppComponent =
          ng.core.Component({
              selector: 'hello-angular2',
              template: '<h1>{{greeting | async}}</h1>'
          })
          .Class({
              constructor: [myApp.AppService, function (svc) {

                  this.greeting = svc.getCurrentUser();
              }]
          });

        ng.platform.browser.bootstrap(myApp.AppComponent, [myApp.AppService]);


    </script>


</asp:Content>
