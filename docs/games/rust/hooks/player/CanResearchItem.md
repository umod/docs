---
hide_table_of_contents: true
---

# CanResearchItem

## Usage

* Called when the player attempts to research an item
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object CanResearchItem(BasePlayer player, Item targetItem)
{
    Puts("CanResearchItem works!");
    return null;
}
```
