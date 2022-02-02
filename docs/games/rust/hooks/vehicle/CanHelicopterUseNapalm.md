---
hide_table_of_contents: true
---

# CanHelicopterUseNapalm

## Usage

* Called when a patrol helicopter attempts to use napalm
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanHelicopterUseNapalm(PatrolHelicopterAI heli)
{
    Puts("CanHelicopterUseNapalm works!");
    return null;
}
```
