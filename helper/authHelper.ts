import { RoleNames } from 'src/constants/Roles'
import { USER_TYPES_INDEX } from 'src/models/enum'
import { IGetRolesResponse } from 'src/services/UserRole/Models/GetRolesResponse'

export function IsInRole(
  userRoles: IGetRolesResponse[] | null,
  userType: USER_TYPES_INDEX,
  expectedUserTypes?: USER_TYPES_INDEX[] | undefined,
  expectedRoles?: RoleNames[] | undefined,
): boolean {

  
  if (!expectedRoles && !expectedUserTypes) return true
  if(userType===USER_TYPES_INDEX.superAdmin) return true;
  const rolesStr = expectedRoles?.map(r => RoleNames[r].toLowerCase())

  const userRolesStr = userRoles?.map(i => i.name.trim().toLowerCase())

  if (expectedRoles && expectedUserTypes)
    return (expectedUserTypes.includes(+userType) && userRolesStr?.some(r => rolesStr?.includes(r))) ?? false

  if (!expectedRoles && expectedUserTypes) return expectedUserTypes!.includes(+userType)

  if (!expectedUserTypes && expectedRoles) return userRolesStr?.some(r => rolesStr!.includes(r)) ?? false

  return false
}
