---
hide_table_of_contents: true
---

# OnItemSplit

## Usage

* Called right before an item is split into multiple stacks
* Returning an Item overrides default behavior

## Examples

```csharp title=""
Item OnItemSplit(Item item, int amount)
{
    Puts("OnItemSplit works!");
    return null;
}
```
