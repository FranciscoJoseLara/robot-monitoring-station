// generated from rosidl_typesupport_introspection_c/resource/idl__type_support.c.em
// with input from rosapi_msgs:srv/GetROSVersion.idl
// generated code does not contain a copyright notice

#include <stddef.h>
#include "rosapi_msgs/srv/detail/get_ros_version__rosidl_typesupport_introspection_c.h"
#include "rosapi_msgs/msg/rosidl_typesupport_introspection_c__visibility_control.h"
#include "rosidl_typesupport_introspection_c/field_types.h"
#include "rosidl_typesupport_introspection_c/identifier.h"
#include "rosidl_typesupport_introspection_c/message_introspection.h"
#include "rosapi_msgs/srv/detail/get_ros_version__functions.h"
#include "rosapi_msgs/srv/detail/get_ros_version__struct.h"


#ifdef __cplusplus
extern "C"
{
#endif

void GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_init_function(
  void * message_memory, enum rosidl_runtime_c__message_initialization _init)
{
  // TODO(karsten1987): initializers are not yet implemented for typesupport c
  // see https://github.com/ros2/ros2/issues/397
  (void) _init;
  rosapi_msgs__srv__GetROSVersion_Request__init(message_memory);
}

void GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_fini_function(void * message_memory)
{
  rosapi_msgs__srv__GetROSVersion_Request__fini(message_memory);
}

static rosidl_typesupport_introspection_c__MessageMember GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_message_member_array[1] = {
  {
    "structure_needs_at_least_one_member",  // name
    rosidl_typesupport_introspection_c__ROS_TYPE_UINT8,  // type
    0,  // upper bound of string
    NULL,  // members of sub message
    false,  // is array
    0,  // array size
    false,  // is upper bound
    offsetof(rosapi_msgs__srv__GetROSVersion_Request, structure_needs_at_least_one_member),  // bytes offset in struct
    NULL,  // default value
    NULL,  // size() function pointer
    NULL,  // get_const(index) function pointer
    NULL,  // get(index) function pointer
    NULL  // resize(index) function pointer
  }
};

static const rosidl_typesupport_introspection_c__MessageMembers GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_message_members = {
  "rosapi_msgs__srv",  // message namespace
  "GetROSVersion_Request",  // message name
  1,  // number of fields
  sizeof(rosapi_msgs__srv__GetROSVersion_Request),
  GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_message_member_array,  // message members
  GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_init_function,  // function to initialize message memory (memory has to be allocated)
  GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_fini_function  // function to terminate message instance (will not free memory)
};

// this is not const since it must be initialized on first access
// since C does not allow non-integral compile-time constants
static rosidl_message_type_support_t GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_message_type_support_handle = {
  0,
  &GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_message_members,
  get_message_typesupport_handle_function,
};

ROSIDL_TYPESUPPORT_INTROSPECTION_C_EXPORT_rosapi_msgs
const rosidl_message_type_support_t *
ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_introspection_c, rosapi_msgs, srv, GetROSVersion_Request)() {
  if (!GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_message_type_support_handle.typesupport_identifier) {
    GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_message_type_support_handle.typesupport_identifier =
      rosidl_typesupport_introspection_c__identifier;
  }
  return &GetROSVersion_Request__rosidl_typesupport_introspection_c__GetROSVersion_Request_message_type_support_handle;
}
#ifdef __cplusplus
}
#endif

// already included above
// #include <stddef.h>
// already included above
// #include "rosapi_msgs/srv/detail/get_ros_version__rosidl_typesupport_introspection_c.h"
// already included above
// #include "rosapi_msgs/msg/rosidl_typesupport_introspection_c__visibility_control.h"
// already included above
// #include "rosidl_typesupport_introspection_c/field_types.h"
// already included above
// #include "rosidl_typesupport_introspection_c/identifier.h"
// already included above
// #include "rosidl_typesupport_introspection_c/message_introspection.h"
// already included above
// #include "rosapi_msgs/srv/detail/get_ros_version__functions.h"
// already included above
// #include "rosapi_msgs/srv/detail/get_ros_version__struct.h"


// Include directives for member types
// Member `distro`
#include "rosidl_runtime_c/string_functions.h"

#ifdef __cplusplus
extern "C"
{
#endif

void GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_init_function(
  void * message_memory, enum rosidl_runtime_c__message_initialization _init)
{
  // TODO(karsten1987): initializers are not yet implemented for typesupport c
  // see https://github.com/ros2/ros2/issues/397
  (void) _init;
  rosapi_msgs__srv__GetROSVersion_Response__init(message_memory);
}

void GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_fini_function(void * message_memory)
{
  rosapi_msgs__srv__GetROSVersion_Response__fini(message_memory);
}

static rosidl_typesupport_introspection_c__MessageMember GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_message_member_array[2] = {
  {
    "version",  // name
    rosidl_typesupport_introspection_c__ROS_TYPE_UINT8,  // type
    0,  // upper bound of string
    NULL,  // members of sub message
    false,  // is array
    0,  // array size
    false,  // is upper bound
    offsetof(rosapi_msgs__srv__GetROSVersion_Response, version),  // bytes offset in struct
    NULL,  // default value
    NULL,  // size() function pointer
    NULL,  // get_const(index) function pointer
    NULL,  // get(index) function pointer
    NULL  // resize(index) function pointer
  },
  {
    "distro",  // name
    rosidl_typesupport_introspection_c__ROS_TYPE_STRING,  // type
    0,  // upper bound of string
    NULL,  // members of sub message
    false,  // is array
    0,  // array size
    false,  // is upper bound
    offsetof(rosapi_msgs__srv__GetROSVersion_Response, distro),  // bytes offset in struct
    NULL,  // default value
    NULL,  // size() function pointer
    NULL,  // get_const(index) function pointer
    NULL,  // get(index) function pointer
    NULL  // resize(index) function pointer
  }
};

static const rosidl_typesupport_introspection_c__MessageMembers GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_message_members = {
  "rosapi_msgs__srv",  // message namespace
  "GetROSVersion_Response",  // message name
  2,  // number of fields
  sizeof(rosapi_msgs__srv__GetROSVersion_Response),
  GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_message_member_array,  // message members
  GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_init_function,  // function to initialize message memory (memory has to be allocated)
  GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_fini_function  // function to terminate message instance (will not free memory)
};

// this is not const since it must be initialized on first access
// since C does not allow non-integral compile-time constants
static rosidl_message_type_support_t GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_message_type_support_handle = {
  0,
  &GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_message_members,
  get_message_typesupport_handle_function,
};

ROSIDL_TYPESUPPORT_INTROSPECTION_C_EXPORT_rosapi_msgs
const rosidl_message_type_support_t *
ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_introspection_c, rosapi_msgs, srv, GetROSVersion_Response)() {
  if (!GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_message_type_support_handle.typesupport_identifier) {
    GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_message_type_support_handle.typesupport_identifier =
      rosidl_typesupport_introspection_c__identifier;
  }
  return &GetROSVersion_Response__rosidl_typesupport_introspection_c__GetROSVersion_Response_message_type_support_handle;
}
#ifdef __cplusplus
}
#endif

#include "rosidl_runtime_c/service_type_support_struct.h"
// already included above
// #include "rosapi_msgs/msg/rosidl_typesupport_introspection_c__visibility_control.h"
// already included above
// #include "rosapi_msgs/srv/detail/get_ros_version__rosidl_typesupport_introspection_c.h"
// already included above
// #include "rosidl_typesupport_introspection_c/identifier.h"
#include "rosidl_typesupport_introspection_c/service_introspection.h"

// this is intentionally not const to allow initialization later to prevent an initialization race
static rosidl_typesupport_introspection_c__ServiceMembers rosapi_msgs__srv__detail__get_ros_version__rosidl_typesupport_introspection_c__GetROSVersion_service_members = {
  "rosapi_msgs__srv",  // service namespace
  "GetROSVersion",  // service name
  // these two fields are initialized below on the first access
  NULL,  // request message
  // rosapi_msgs__srv__detail__get_ros_version__rosidl_typesupport_introspection_c__GetROSVersion_Request_message_type_support_handle,
  NULL  // response message
  // rosapi_msgs__srv__detail__get_ros_version__rosidl_typesupport_introspection_c__GetROSVersion_Response_message_type_support_handle
};

static rosidl_service_type_support_t rosapi_msgs__srv__detail__get_ros_version__rosidl_typesupport_introspection_c__GetROSVersion_service_type_support_handle = {
  0,
  &rosapi_msgs__srv__detail__get_ros_version__rosidl_typesupport_introspection_c__GetROSVersion_service_members,
  get_service_typesupport_handle_function,
};

// Forward declaration of request/response type support functions
const rosidl_message_type_support_t *
ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_introspection_c, rosapi_msgs, srv, GetROSVersion_Request)();

const rosidl_message_type_support_t *
ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_introspection_c, rosapi_msgs, srv, GetROSVersion_Response)();

ROSIDL_TYPESUPPORT_INTROSPECTION_C_EXPORT_rosapi_msgs
const rosidl_service_type_support_t *
ROSIDL_TYPESUPPORT_INTERFACE__SERVICE_SYMBOL_NAME(rosidl_typesupport_introspection_c, rosapi_msgs, srv, GetROSVersion)() {
  if (!rosapi_msgs__srv__detail__get_ros_version__rosidl_typesupport_introspection_c__GetROSVersion_service_type_support_handle.typesupport_identifier) {
    rosapi_msgs__srv__detail__get_ros_version__rosidl_typesupport_introspection_c__GetROSVersion_service_type_support_handle.typesupport_identifier =
      rosidl_typesupport_introspection_c__identifier;
  }
  rosidl_typesupport_introspection_c__ServiceMembers * service_members =
    (rosidl_typesupport_introspection_c__ServiceMembers *)rosapi_msgs__srv__detail__get_ros_version__rosidl_typesupport_introspection_c__GetROSVersion_service_type_support_handle.data;

  if (!service_members->request_members_) {
    service_members->request_members_ =
      (const rosidl_typesupport_introspection_c__MessageMembers *)
      ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_introspection_c, rosapi_msgs, srv, GetROSVersion_Request)()->data;
  }
  if (!service_members->response_members_) {
    service_members->response_members_ =
      (const rosidl_typesupport_introspection_c__MessageMembers *)
      ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(rosidl_typesupport_introspection_c, rosapi_msgs, srv, GetROSVersion_Response)()->data;
  }

  return &rosapi_msgs__srv__detail__get_ros_version__rosidl_typesupport_introspection_c__GetROSVersion_service_type_support_handle;
}
