---
hide_table_of_contents: true
---

# OnItemUnlock

## Usage

* Called right before an item is unlocked, such as in a modular car inventory
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnItemUnlock(Item item)
{
    Puts("OnItemUnlock works!");
    return null;
}
```
