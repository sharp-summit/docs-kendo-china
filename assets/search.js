function search_loaded(){$("#page-search table.gsc-search-box > tbody > tr").append($("<td id='refine-search-container'><div id='refine-search-button' class='unselectable'><span id='refine-search-label' data-bind='text: label'></span><span class='k-icon k-i-arrow-chevron-down'></span></div></td>"));var e=$("#refine-search-popup").kendoPopup({anchor:$("#page-search table.gsc-search-box"),origin:"bottom right",position:"top right"}).data("kendoPopup");$("#page-search #refine-search-button").on("click",function(){e.toggle()});viewModel.updateLabel(),kendo.bind($("#page-search"),viewModel),kendo.bind($("#refine-search-popup"),viewModel),$(".custom-checkbox input[type='checkbox']").change(function(){viewModel.updateLabel()}),attachToEvents(),searchInternal()}function searchInternal(){}function onSearchInternal(){}function search(){var e=google.search.cse.element.getElement(GCSE_ELEMENT_NAME);if(e){searchTerms=$(".gsc-input-box .gsc-input").val();var t=viewModel.getFilter();trackSearchQuery(t,searchTerms),t=""!==t?PAGE_FILTER+t:"",e.execute(searchTerms+t),$(".gsc-input-box .gsc-input").val(searchTerms)}onSearchInternal()}function closePopup(){var e=$("#refine-search-popup").data("kendoPopup");e.close()}function attachToEvents(){var e=$('.gsc-input input[type="text"]'),t=e.clone();e.replaceWith(t),t.keydown(function(e){if(13==e.keyCode)return closePopup(),search(),!1});var a=$('.gsc-search-button input[type="image"].gsc-search-button.gsc-search-button-v2'),c=a.clone();a.replaceWith(c),c.click(function(){return closePopup(),search(),!1}),$("#page-search").on("click","a.gs-title",function(e){trackSearchResult($(e.target).data("ctorig"))})}function trackSearchQuery(e,t){trackItem("docs-search-terms",e,t)}function trackSearchResult(e){trackItem("docs-search-results",searchTerms,e)}function trackItem(e,t,a){dataLayer.push({event:"virtualEvent",eventCategory:e,eventAction:t,eventLabel:a})}var PAGE_FILTER=" more:pagemap:metatags-restype:",GCSE_ELEMENT_NAME="google-search",viewModel=kendo.observable({kb:!1,docs:!1,api:!1,label:"",filterValues:[],getFilter:function(){for(var e="",t=0;t<this.filterValues.length;t++)""!==e&&(e+=","),e+=this.filterValues[t];return e},updateLabel:function(){var e="";this.filterValues=[],this.kb&&this.docs&&this.api||!this.kb&&!this.docs&&!this.api?e="Search all":(this.docs&&(e+="DOCS",this.filterValues.push("documentation")),this.kb&&(e+=(e?" / ":"")+"KB",this.filterValues.push("kb")),this.api&&(e+=(e?" / ":"")+"API",this.filterValues.push("api")),e="Search in "+e),this.set("label",e)}}),searchTerms="";window.__gcse={callback:search_loaded};