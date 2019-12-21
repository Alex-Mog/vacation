(this["webpackJsonpvocation-frontend"]=this["webpackJsonpvocation-frontend"]||[]).push([[46],{1234:function(e,t,a){},1273:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),s=a(10),i=a(9),l=a(11),o=a(0),c=a.n(o),u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content_show"},c.a.createElement("div",{className:"content_showhead"},c.a.createElement("h1",null,"Choose from one of our 3 listing plans ranging from $199 up to $399 a year"),c.a.createElement("h4",null,"* Contact us for multiple property discounts")),c.a.createElement("div",{className:"content_right"}))}}]),t}(c.a.Component),m=a(3),h=a(19),p=a(6),d=a(89),b=a(15),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={is_redirect:!1},a.handleDraft=a.handleDraft.bind(Object(m.a)(a)),a.handlePublish=a.handlePublish.bind(Object(m.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handlePublish",value:function(e){var t=this,a={data:JSON.stringify({status:"Unlisted"})};d.a.updateRoomPropertySummary(this.props.roomId,a).then((function(e){e?e.steps_count>0?b.a.showWarning("You still have "+e.steps_count+" steps left to complete before you can publish.",""):t.setState({is_redirect:!0}):b.a.showError("Update Room Property Summary")}))}},{key:"handleDraft",value:function(e){var t={data:JSON.stringify({status:"Draft"})};d.a.updateRoomPropertySummary(this.props.roomId,t).then((function(e){e?b.a.showSuccess("Saved to draft!",""):b.a.showError("Update Room Property Summary")}))}},{key:"render",value:function(){return this.state.is_redirect?c.a.createElement(h.a,{to:"/rooms/subscribe/".concat(this.props.roomId)}):c.a.createElement("div",{className:"calendar_savebuttons"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(p.b,{to:"/rooms/manage/".concat(this.props.roomId,"/terms"),className:"right_save"},"Back"),c.a.createElement(p.b,{to:"#",className:"right_save_draft",onClick:this.handleDraft},"Draft"),c.a.createElement(p.b,{to:"#",className:"right_save_publish",onClick:this.handlePublish},"Publish")))}}]),t}(c.a.Component),v=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("tr",{className:"compare-row"},c.a.createElement("td",null,this.props.title),this.props.types.map((function(t,a){return c.a.createElement("td",{key:a},c.a.createElement("span",{className:"tickblue"},t[e.props.attribute]?"\u2714":"-"))})))}}]),t}(c.a.PureComponent),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={types:[],current_plan:""},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.getMembershipTypes().then((function(t){t?e.setState({types:t.data,current_plan:t.current_plan}):b.a.showError("Get membership")}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container comparison mb-4"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"tl"}),this.state.types.map((function(e,t){return c.a.createElement("th",{className:"compare-heading",key:t},e.Name)}))),c.a.createElement("tr",null,c.a.createElement("th",{className:"",key:0},c.a.createElement("h3",null,"Listing Features ")),this.state.types.map((function(e,t){return c.a.createElement("th",{className:"price-info",key:t+1},c.a.createElement("div",{className:"price-now",key:t+1},c.a.createElement("span",null,"$",e.annual_fee," ")," /year"))})))),c.a.createElement("tbody",null,[{title:"Availability calendar",attribute:"is_availability_calendar"},{title:"Ranks above Bronze in search results",attribute:"rank_above_bronze_in_search"},{title:"Ranks above Silver in search results",attribute:"rnak_above_sliver_in_search"},{title:"More inquiries than Bronze",attribute:"average_inquiries_than_basic"},{title:"Link to your personal website",attribute:"link_personal_website"},{title:"Phone number published",attribute:"phone_number_published"},{title:"Free special offers",attribute:"free_special_offers"},{title:"Text message (SMS) inquiry alerts",attribute:"sms_inquiry_alerts"},{title:"Free custom video",attribute:"free_custom_video"},{title:"Ranks highest in search results",attribute:"rank_highest_in_search"},{title:"Featured on home page",attribute:"featured_on_home_page"}].map((function(t,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null),c.a.createElement("td",{colSpan:4},t.title)),c.a.createElement(v,{title:t.title,attribute:t.attribute,types:e.state.types,key:a}))})))))}}]),t}(c.a.Component),_=a(98),E=a.n(_),g=(a(1234),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"room-publish manage-listing-content-wrapper"},c.a.createElement("div",{className:"listing_whole col-md-9",id:"js-manage-listing-content"},c.a.createElement("div",{className:"common_listpage"},c.a.createElement(u,null),c.a.createElement(y,null))),c.a.createElement("div",{className:"col-md-3 col-sm-12 listing_desc location_desc"},c.a.createElement("div",{className:"manage_listing_left"},c.a.createElement("img",{src:E.a,className:"col-center",width:75,height:75,alt:"property help"}),c.a.createElement("div",{className:"amenities_about"},c.a.createElement("h4",null,"Guests Love Video"),c.a.createElement("h4",null,"Benefits Of Membership"),c.a.createElement(f,{roomId:this.props.match.params.room_id}),c.a.createElement("p",null,"Membership in our site gives you immediate exposure to 1,000s of travelers who are searching our site each day. Each membership allows you to upload 35 images, get a free custom YouTube video, 500 custom business cards with holder and utilize all of the features of this site to include iCal, SMS notifications, Google maps and much more."),c.a.createElement("p",null,"Sign up today and take back control of your vacation rental listing. "),c.a.createElement("p",null,"Please make sure to join our homeowners ",c.a.createElement("a",{href:"https://www.facebook.com/groups/vacation.rentals4U/",target:"_blank",rel:"noopener noreferrer"},"Facebook Group")," to stay abreast of all updates and improvements."),c.a.createElement("em",null,"*Please contact us at sales@vacation.rentals for any assistance with your listing(s).")))))}}]),t}(c.a.Component));t.default=g},98:function(e,t,a){e.exports=a.p+"static/media/property-help.1a8e1b11.png"}}]);
//# sourceMappingURL=46.0aea0b4b.chunk.js.map