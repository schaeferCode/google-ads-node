var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.CalloutPlaceholderField",null,global),proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.displayName="proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum;return proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.CalloutPlaceholderFieldEnum.CalloutPlaceholderField={UNSPECIFIED:0,UNKNOWN:1,CALLOUT_TEXT:2},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);