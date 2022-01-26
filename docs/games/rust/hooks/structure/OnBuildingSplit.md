---
hide_table_of_contents: true
---

# OnBuildingSplit

## Usage

* Called when a building is split into two
* No Return behavior

## Examples

```csharp title=""
void OnBuildingSplit(BuildingBlock block, uint newBuildingId)
{
    Puts("OnBuildingSplit works!");
}
```
