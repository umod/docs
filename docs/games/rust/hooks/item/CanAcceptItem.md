---
hide_table_of_contents: true
---

# CanAcceptItem

## Usage

* Called when attempting to put an item in a container
* Returning CanAcceptResult value overrides default behavior

## Examples

```csharp title=""
ItemContainer.CanAcceptResult? CanAcceptItem(ItemContainer container, Item item, int targetPos)
{
    Puts("CanAcceptItem works!");
    return null;
}
```
