---
hide_table_of_contents: true
---

# OnItemResearched

## Usage

* Called right before a player finishes researching an item
* Returning a float will affect if researching is successful or not

## Examples

```csharp title=""
float OnItemResearched(ResearchTable table, float chance)
{
    Puts("OnItemResearched works!");
    return 1;
}
```
