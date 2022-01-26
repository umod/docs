---
hide_table_of_contents: true
---

# OnItemResearch

## Usage

* Called right before a player begins to research an item
* No Return behavior

## Examples

```csharp title=""
void OnItemResearch(ResearchTable table, Item targetItem, BasePlayer player)
{
    Puts("OnItemResearch works!");
}
```
