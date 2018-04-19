<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

<select id="slChartValue">
  <option value="1">Pie Chart</option>
    <option value="2">Column Chart</option>
</select>    
<button onclick="drawChart(); return false;" class="btn">
Load
</button>
<div id="chart_div"></div>

</asp:Content>
