// package: google.ads.googleads.v1.errors
// file: google/ads/googleads/v1/errors/query_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class QueryErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: QueryErrorEnum): QueryErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryErrorEnum;
  static deserializeBinaryFromReader(message: QueryErrorEnum, reader: jspb.BinaryReader): QueryErrorEnum;
}

export namespace QueryErrorEnum {
  export type AsObject = {
  }

  export enum QueryError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    QUERY_ERROR = 50,
    BAD_ENUM_CONSTANT = 18,
    BAD_ESCAPE_SEQUENCE = 7,
    BAD_FIELD_NAME = 12,
    BAD_LIMIT_VALUE = 15,
    BAD_NUMBER = 5,
    BAD_OPERATOR = 3,
    BAD_RESOURCE_TYPE_IN_FROM_CLAUSE = 45,
    BAD_SYMBOL = 2,
    BAD_VALUE = 4,
    DATE_RANGE_TOO_WIDE = 36,
    EXPECTED_AND = 30,
    EXPECTED_BY = 14,
    EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE = 37,
    EXPECTED_FILTERS_ON_DATE_RANGE = 55,
    EXPECTED_FROM = 44,
    EXPECTED_LIST = 41,
    EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE = 16,
    EXPECTED_SELECT = 13,
    EXPECTED_SINGLE_VALUE = 42,
    EXPECTED_VALUE_WITH_BETWEEN_OPERATOR = 29,
    INVALID_DATE_FORMAT = 38,
    INVALID_STRING_VALUE = 57,
    INVALID_VALUE_WITH_BETWEEN_OPERATOR = 26,
    INVALID_VALUE_WITH_DURING_OPERATOR = 22,
    INVALID_VALUE_WITH_LIKE_OPERATOR = 56,
    OPERATOR_FIELD_MISMATCH = 35,
    PROHIBITED_EMPTY_LIST_IN_CONDITION = 28,
    PROHIBITED_ENUM_CONSTANT = 54,
    PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE = 31,
    PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE = 40,
    PROHIBITED_FIELD_IN_SELECT_CLAUSE = 23,
    PROHIBITED_FIELD_IN_WHERE_CLAUSE = 24,
    PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE = 43,
    PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE = 48,
    PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE = 58,
    PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE = 49,
    PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE = 51,
    PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE = 53,
    LIMIT_VALUE_TOO_LOW = 25,
    PROHIBITED_NEWLINE_IN_STRING = 8,
    PROHIBITED_VALUE_COMBINATION_IN_LIST = 10,
    PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR = 21,
    STRING_NOT_TERMINATED = 6,
    TOO_MANY_SEGMENTS = 34,
    UNEXPECTED_END_OF_QUERY = 9,
    UNEXPECTED_FROM_CLAUSE = 47,
    UNRECOGNIZED_FIELD = 32,
    UNEXPECTED_INPUT = 11,
    REQUESTED_METRICS_FOR_MANAGER = 59,
  }
}
