---
hide_table_of_contents: true
---

# OnConstructionPlace

## Usage

* Called when a player tries to place a building block
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnConstructionPlace(BaseEntity entity, Construction component, Construction.Target constructionTarget, BasePlayer player)
{
    Puts("OnConstructionPlace works!");
    return null;
}
```
