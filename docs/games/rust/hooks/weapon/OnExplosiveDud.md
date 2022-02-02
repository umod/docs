---
hide_table_of_contents: true
---

# OnExplosiveDud

## Usage

* Called when explosive tries to become dud
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnExplosiveDud(DudTimedExplosive explosive)
{
    Puts("OnExplosiveDud works!");
    return null;
}
```
