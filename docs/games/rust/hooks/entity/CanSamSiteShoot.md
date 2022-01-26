---
hide_table_of_contents: true
---

# CanSamSiteShoot

## Usage

* Useful for canceling the shoot of SamSite
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object CanSamSiteShoot(SamSite samSite)
{
    Puts("CanSamSiteShoot works!");
    return null;
}
```
