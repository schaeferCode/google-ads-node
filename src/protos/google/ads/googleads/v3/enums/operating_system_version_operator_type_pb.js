var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.OperatingSystemVersionOperatorType",null,global),proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.displayName="proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum;return proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.enums.OperatingSystemVersionOperatorTypeEnum.OperatingSystemVersionOperatorType={UNSPECIFIED:0,UNKNOWN:1,EQUALS_TO:2,GREATER_THAN_EQUALS_TO:4},goog.object.extend(exports,proto.google.ads.googleads.v3.enums);