---
hide_table_of_contents: true
---

# OnSamSiteTarget

## Usage

* Called before last target visible time is updated
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnSamSiteTarget(SamSite entity, BaseCombatEntity target)
{
    Puts("OnSamSiteTarget works!");
    return null;
}
```
