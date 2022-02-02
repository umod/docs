---
hide_table_of_contents: true
---

# CanStackItem

## Usage

* Called when moving an item onto another item
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanStackItem(Item item, Item targetItem)
{
    Puts("CanStackItem works!");
    return null;
}
```
