---
hide_table_of_contents: true
---

# OnItemUpgrade

## Usage

* Called right before an item is upgraded
* No Return behavior

## Examples

```csharp title=""
void OnItemUpgrade(Item item, Item upgraded, BasePlayer player)
{
    Puts("OnItemUpgrade works!");
}
```
