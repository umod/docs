---
hide_table_of_contents: true
---

# CanDemolish

## Usage

* Called when a player tries to demolish a building block
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanDemolish(BasePlayer player, BuildingBlock block, BuildingGrade.Enum grade)
{
    Puts("CanDemolish works!");
    return null;
}
```
