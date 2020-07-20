"use strict";var grpc=require("grpc"),google_ads_googleads_v4_services_detail_placement_view_service_pb=require("../../../../../google/ads/googleads/v4/services/detail_placement_view_service_pb.js"),google_ads_googleads_v4_resources_detail_placement_view_pb=require("../../../../../google/ads/googleads/v4/resources/detail_placement_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js"),google_api_resource_pb=require("../../../../../google/api/resource_pb.js");function serialize_google_ads_googleads_v4_resources_DetailPlacementView(e){if(!(e instanceof google_ads_googleads_v4_resources_detail_placement_view_pb.DetailPlacementView))throw new Error("Expected argument of type google.ads.googleads.v4.resources.DetailPlacementView");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_resources_DetailPlacementView(e){return google_ads_googleads_v4_resources_detail_placement_view_pb.DetailPlacementView.deserializeBinary(new Uint8Array(e))}function serialize_google_ads_googleads_v4_services_GetDetailPlacementViewRequest(e){if(!(e instanceof google_ads_googleads_v4_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest))throw new Error("Expected argument of type google.ads.googleads.v4.services.GetDetailPlacementViewRequest");return Buffer.from(e.serializeBinary())}function deserialize_google_ads_googleads_v4_services_GetDetailPlacementViewRequest(e){return google_ads_googleads_v4_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest.deserializeBinary(new Uint8Array(e))}var DetailPlacementViewServiceService=exports.DetailPlacementViewServiceService={getDetailPlacementView:{path:"/google.ads.googleads.v4.services.DetailPlacementViewService/GetDetailPlacementView",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v4_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest,responseType:google_ads_googleads_v4_resources_detail_placement_view_pb.DetailPlacementView,requestSerialize:serialize_google_ads_googleads_v4_services_GetDetailPlacementViewRequest,requestDeserialize:deserialize_google_ads_googleads_v4_services_GetDetailPlacementViewRequest,responseSerialize:serialize_google_ads_googleads_v4_resources_DetailPlacementView,responseDeserialize:deserialize_google_ads_googleads_v4_resources_DetailPlacementView}};exports.DetailPlacementViewServiceClient=grpc.makeGenericClientConstructor(DetailPlacementViewServiceService);