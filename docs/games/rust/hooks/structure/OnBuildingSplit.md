---
hide_table_of_contents: true
---

# OnBuildingSplit

## Usage

* Called when a building is split into two
* No return behavior

## Examples

```csharp title=""
void OnBuildingSplit(BuildingManager.Building building, uint newBuildingId)
{
    Puts("OnBuildingSplit works!");
}
```
