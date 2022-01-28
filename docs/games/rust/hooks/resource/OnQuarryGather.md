---
hide_table_of_contents: true
---

# OnQuarryGather

## Usage

* Called before items are gathered from a quarry
* No return behavior

## Examples

```csharp title=""
void OnQuarryGather(MiningQuarry quarry, Item item)
{
    Puts("OnQuarryGather works!");
}
```
