---
hide_table_of_contents: true
---

# OnItemCraftFinished

## Usage

* Called right after an item has been crafted
* No return behavior

## Examples

```csharp title=""
void OnItemCraftFinished(ItemCraftTask task, Item item)
{
    Puts("OnItemCraftFinished works!");
}
```
