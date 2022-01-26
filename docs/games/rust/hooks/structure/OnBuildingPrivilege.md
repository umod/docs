---
hide_table_of_contents: true
---

# OnBuildingPrivilege

## Usage

* Useful for overriding a building privilege on specific entities and etc.
* Returning BuildingPrivlidge value overrides default behavior

## Examples

```csharp title=""
BuildingPrivlidge OnBuildingPrivilege(BaseEntity entity, OBB obb)
{
    Puts($"Getting a building privilege for {entity.ShortPrefabName}!");
    return null;
}
```
