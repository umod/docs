---
hide_table_of_contents: true
---

# OnHealingItemUse

## Usage

* Called when a player attempts to use a medical tool
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnHealingItemUse(MedicalTool tool, BasePlayer player)
{
    Puts("OnHealingItemUse works!");
    return null;
}
```
