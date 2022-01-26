---
hide_table_of_contents: true
---

# OnConstructionPlace

## Usage

* Called when a player tries to place a building block
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnConstructionPlace(BaseEntity entity, Construction component, Construction.Target constructionTarget, BasePlayer player)
{
    Puts("OnConstructionPlace works!");
    return null;
}
```
