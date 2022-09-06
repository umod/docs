---
hide_table_of_contents: true
---

# OnSamSiteTarget

## Usage

* Called before last target visible time is updated
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnSamSiteTarget(SamSite samSite, BaseCombatEntity target)
{
    Puts("OnSamSiteTarget works!");
    return null;
}
```
