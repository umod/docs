---
hide_table_of_contents: true
---

# OnItemResearched

## Usage

* Called right before a player finishes researching an item
* Returning an int will affect if researching is successful or not

## Examples

```csharp title=""
int? OnItemResearched(ResearchTable table, int chance)
{
    Puts("OnItemResearched works!");
    return null;
}
```
