---
hide_table_of_contents: true
---

# OnItemUnlock

## Usage

* Called right before an item is unlocked, such as in a modular car inventory
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnItemUnlock(Item item)
{
    Puts("OnItemUnlock works!");
    return null;
}
```
